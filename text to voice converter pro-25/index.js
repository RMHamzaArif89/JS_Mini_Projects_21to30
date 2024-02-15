btn=document.querySelector('button')
inp=document.querySelector('textarea')

let speech = new SpeechSynthesisUtterance();
btn.addEventListener('click',function func(){
speech.text = inp.value;
window.speechSynthesis.speak(speech);
})







//select voices
voices=[]

voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    voices.forEach((voice,i) => (voiceSelect.options[i]= new Option(voice.name, i)));

};
voiceSelect.addEventListener('change',()=>{
    speech.voice=voices[voiceSelect.value]
})