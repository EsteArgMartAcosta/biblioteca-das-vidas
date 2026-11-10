import type {Save,Action,Settings} from '../narrative/types';
import { replay } from '../narrative/engine';
export const SAVE_KEY='biblioteca.vidas.v2';
export const newSave=():Save=>({version:2,uid:typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():String(Date.now()),events:[],settings:{reduced:false,volume:.25,textSize:1},wish:'',route:'atrio',introSeen:false,houseSeen:false});
export function decode(raw:string):Save{
  if(raw.length>2_000_000)throw new Error('O arquivo é maior do que uma jornada pode ser.');
  let x=JSON.parse(raw);if(x.version===1)x={...x,version:2,houseSeen:false,settings:{reduced:false,volume:.25,textSize:1,...x.settings}};
  if(!x||x.version!==2||typeof x.uid!=='string'||x.uid.length>100||!Array.isArray(x.events)||x.events.length>10000)throw new Error('Este arquivo não contém uma jornada compatível.');
  for(const e of x.events){if(!e||typeof e.type!=='string')throw new Error('Registro inválido.'); if(e.type==='choose'&&(!['book','node','choice'].every(k=>typeof e[k]==='string')))throw new Error('Escolha inválida.');}
  replay(x.events as Action[]);
  const t=x.settings as Settings;
  if(!t||typeof t.reduced!=='boolean'||!Number.isFinite(t.volume)||t.volume<0||t.volume>1||![1,1.15,1.3].includes(t.textSize))throw new Error('Preferências inválidas.');
  if(typeof x.wish!=='string'||x.wish.length>1000||typeof x.route!=='string'||x.route.length>100||typeof x.introSeen!=='boolean'||typeof x.houseSeen!=='boolean')throw new Error('Dados incompletos.');
  return {version:2,uid:x.uid,events:x.events,settings:{reduced:t.reduced,volume:t.volume,textSize:t.textSize},wish:x.wish,route:x.route,introSeen:x.introSeen,houseSeen:x.houseSeen};
}
export function load(storage:Pick<Storage,'getItem'>):{save:Save;warning:string}{try{const raw=storage.getItem(SAVE_KEY)??storage.getItem('biblioteca.vidas.v1');return {save:raw?decode(raw):newSave(),warning:''};}catch{return {save:newSave(),warning:'Não foi possível ler a jornada salva. O arquivo anterior será preservado até você decidir substituí-lo. Você também pode importar uma cópia.'};}}
export function persist(save:Save,storage:Pick<Storage,'setItem'>):string{try{storage.setItem(SAVE_KEY,JSON.stringify(save));return '';}catch{return 'O navegador não permitiu salvar. A jornada continua nesta aba; exporte uma cópia antes de sair.';}}
export function download(content:string,name:string,type='application/json'){const a=document.createElement('a');const u=URL.createObjectURL(new Blob([content],{type}));a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}
