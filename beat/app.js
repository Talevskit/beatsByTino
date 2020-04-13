function beats() {
  const kick1 = new Tone.Player("./beats/kick-big.wav").toMaster();
  const kick2 = new Tone.Player("./beats/kick-deep.wav").toMaster();
  const kick3 = new Tone.Player("./beats/kick-zapper.wav").toMaster();
  let index = 0;
  Tone.Transport.scheduleRepeat(repeat, "10n");
  Tone.Transport.start();

  function repeat() {
    let step = index % 10;
    let kickOne = document.querySelector(`.kick1 input:nth-child(${step + 1})`);
    let kickTwo = document.querySelector(`.kick2 input:nth-child(${step + 1})`);
    let kickThree = document.querySelector(
      `.kick3 input:nth-child(${step + 1})`
    );

    if (kickOne.checked) {
      kick1.start();
    }
    if (kickTwo.checked) {
      kick2.start();
    }
    if (kickThree.checked) {
      kick3.start();
    }
    index++;
  }
}
beats();
