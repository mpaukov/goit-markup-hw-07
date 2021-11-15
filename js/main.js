(() => {
  const refs = {
    formsend: document.querySelector(".js-speaker-form"),
  };

  refs.formsend.addEventListener("submit", (e) => {
    e.preventDefault();
    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );
    e.currentTarget.reset();
  });
})();
