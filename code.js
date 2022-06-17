function Converter(){
    let age = document.getElementById('Age').value;
    let day= document.getElementById('Days');
    let calculator = Math.floor((new Date() - new Date(age)) / (1000 * 60 * 60 * 24));
    day.value= calculator;
}