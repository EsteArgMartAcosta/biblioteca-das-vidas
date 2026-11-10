/** Original procedural audio. No recording, network, or third-party samples. */
export class Soundscape {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private nodes: AudioScheduledSourceNode[] = [];
  private volume = 0.25;
  enabled = false;
  async enable(theme: string) {
    if (!this.ctx) this.ctx = new AudioContext();
    await this.ctx.resume();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(this.ctx.destination);
    this.enabled = true;
    this.theme(theme);
  }
  disable() {
    this.nodes.forEach((n) => {
      try {
        n.stop();
      } catch {}
    });
    this.nodes = [];
    this.master?.disconnect();
    this.master = null;
    this.enabled = false;
    void this.ctx?.suspend();
  }
  setVolume(v: number) {
    this.volume = v;
    if (this.master && this.ctx)
      this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.1);
  }
  theme(theme: string) {
    if (!this.enabled || !this.ctx || !this.master) return;
    this.nodes.forEach((n) => {
      try {
        n.stop();
      } catch {}
    });
    this.nodes = [];
    const c = this.ctx;
    const buffer = c.createBuffer(1, c.sampleRate * 3, c.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      last = (last + (Math.random() * 2 - 1) * 0.025) / 1.02;
      data[i] = last;
    }
    const rain = c.createBufferSource();
    rain.buffer = buffer;
    rain.loop = true;
    const filter = c.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value =
      theme === "house" ? 1600 : theme === "farol" ? 750 : 320;
    const gain = c.createGain();
    gain.gain.value = theme === "house" ? 0.9 : 0.28;
    rain.connect(filter).connect(gain).connect(this.master);
    rain.start();
    this.nodes.push(rain);
    if (theme !== "house") {
      const notes: Record<string, number[]> = {
        farol: [98, 147],
        tempo: [110, 165],
        estrelas: [130.81, 196],
        desencontro: [146.83, 220],
        jardim: [174.61, 261.63],
        trem: [82.41, 123.47],
        anomalia: [103.83, 155.56],
        final: [130.81],
      };
      for (const f of notes[theme] ?? [98, 146.83]) {
        const o = c.createOscillator();
        o.type = "sine";
        o.frequency.value = f;
        const g = c.createGain();
        g.gain.value = 0.035;
        o.connect(g).connect(this.master);
        o.start();
        this.nodes.push(o);
      }
    }
  }
  touch(kind = "page") {
    if (!this.enabled || !this.ctx || !this.master) return;
    const c = this.ctx,
      o = c.createOscillator(),
      g = c.createGain();
    o.type = kind === "cup" ? "sine" : "triangle";
    o.frequency.setValueAtTime(kind === "cup" ? 880 : 180, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(
      kind === "cup" ? 440 : 70,
      c.currentTime + 0.16,
    );
    g.gain.setValueAtTime(0.05, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.35);
    o.connect(g).connect(this.master);
    o.start();
    o.stop(c.currentTime + 0.36);
  }
}
export const sound = new Soundscape();
