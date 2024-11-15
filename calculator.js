document.getElementById('sum').addEventListener('click',function(){
    const firstInput = document.getElementById('first').value;
    const sectionInput = document.getElementById('second').value;
    const convertedFirst = parseInt(firstInput);
    const convertedSecond = parseInt(sectionInput);
    const result = convertedFirst + convertedSecond;
    const resultP = document.getElementById('result');
    resultP.innerText = result;

})