function stillListening () {
  let button = document.querySelector('button[data-qa="keep_listening_button"]');
  if (button) button.click();
}

setInterval(stillListening, 10000);
