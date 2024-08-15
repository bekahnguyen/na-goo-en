export default function About() {
  const loveWord = [
    "tenacious",
    "gregarious",
    "friendly",
    "happy",
    "fun",
    "social",
    "hard working",
    "crazy",
    "positive",
    "pensive",
    "charismatic",
    "kind",
    "funny",
    "friendly",
    "welcoming",
    "zealous",
    "happy",
    "crazy",
    "unstoppable",
    "always smiling",
    "always laughing",
    "joyful",
    "the fun dad",
    "carefree",
    "PHO",
    "life of the party",
    "fun",
    "super dad",
    "gregarious",
    "welcoming",
    "always smiling",
    "make people feel welcome",
    "fun",
    "excited",
    "loyal",
    "trustworthy",
    "energetic",
    "happy",
    "fun",
    "charismatic",
    "kind",
    "hard working",
    "amazing",
    "energetic",
    "passionate",
    "excited",
    "loyal",
    "joyful",
    "enthusiastic",
    "joyful",
  ];

  const numberLoveWord = loveWord.length;
  let random = Math.round(Math.random() * numberLoveWord);
  // eventually want this word to repopulate and change every couple seconds
  //need to set a timer.

  return (
    <>
      <p>
        Those who know me say I'm <span id="loveWord">{loveWord[random]}</span>
      </p>
      <h1>I'm Nam, I'm awesome</h1>
      <p>
        <li>
          I'm first generation Vietnamese. Vietnamese is my first language.
        </li>
        <li>
          Family is huge to me, if I'm not working, I'm spending time with my
          kids, my wife, my dad, or my in-laws.
        </li>
        <li>
          I've been known to spend 10 hours making pho and then invite everyone
          I know to come and try it. I've always been a fan of the more the
          merrier, whatever the occasion. I live my life as an inclusive event,
          I'll make time for anyone.
        </li>
      </p>

      <img src="/myhoneylove.jpg" alt="Mr. Nam Nguyen" id="myNam"></img>
    </>
  );
}
