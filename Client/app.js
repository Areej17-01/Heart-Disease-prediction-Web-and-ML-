function onClickedEstimatePrediction() {
    console.log("Estimating heart disease prediction...");

    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var cp = document.getElementById("cp").value;
    var trestbps = document.getElementById("trestbps").value;
    var chol = document.getElementById("chol").value;
    var fbs = document.getElementById("fbs").value;
    var restecg = document.getElementById("restecg").value;
    var thalach = document.getElementById("thalach").value;
    var exang = document.getElementById("exang").value;
    var oldpeak = document.getElementById("oldpeak").value;
    var slope = document.getElementById("slope").value;
    var ca = document.getElementById("ca").value;
    var thal = document.getElementById("thal").value;
    console.log(age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal," parameters");
    var url = "http://127.0.0.1:5000/predict_heart_disease";
    $.post(url, {
        age: parseInt(age),
        sex: sex,
        cp: parseInt(cp),
        trestbps: parseInt(trestbps),
        chol: parseInt(chol),
        fbs: parseInt(fbs),
        restecg: parseInt(restecg),
        thalach: parseInt(thalach),
        exang: parseInt(exang),
        oldpeak: parseFloat(oldpeak),
        slope: parseInt(slope),
        ca: parseInt(ca),
        thal: parseInt(thal)
    }, function (data, status) {
        console.log(data.estimated_prediction);
        var resultElement = document.getElementById("uiEstimatedPrediction");
        resultElement.innerHTML = "<h2>" + data.estimated_prediction.toString() ;
        console.log(status);
    });
}

    
function onPageLoad() {
    console.log("document loaded");
    var url = "http://127.0.0.1:5000/predict_heart_disease";
   
    $.get(url, function (data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
        function showResult(result) {
            const outputBox = document.getElementById('#uiEstimatedPrediction h2');
            outputBox.innerHTML = result;
        }
    });
}
window.onload = onPageLoad;
