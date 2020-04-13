function Stopwatch() {
  Stopwatch.prototype.start = function() {
    if (this.running) throw new Error("veke broj sin..");
    this.running = true;
    this.startTime = new Date();
  };
  Stopwatch.prototype.stop = function() {
    if (!this.running) throw new Error("pocnija ednash be sin..");
    this.running = false;
    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    Stopwatch.prototype.duration = seconds;
  };
  Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
  };
}
Stopwatch();
