var recordButton, stopButton, recorder;
var isAudRec = false;

window.InitRecord = async () => {
    recordButton = document.getElementById('record');
    stopButton = document.getElementById('stop');
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
        .then(function (stream) {
            recordButton.disabled = false;
            recorder = new MediaRecorder(stream);
            recorder.addEventListener('dataavailable', onRecordingReady);
        });
};

window.startRecording = async () => {
    recordButton.disabled = true;
    stopButton.disabled = false;
    recorder.start();
}

window.stopRecording = async () => {
    recordButton.disabled = false;
    stopButton.disabled = true;
    recorder.stop();
}
window.TogleRec = async () => {
    if (isAudRec) {
        stopRecording();
    } else {
        startRecording();
    }
};

function onRecordingReady(e) {
    window.Urlblb = URL.createObjectURL(e.data);
    console.log(window.Urlblb);
    var audio = document.getElementById('audio');
    audio.src = window.Urlblb;
}
window.GetUrl = async () => {
    var u1 = window.Urlblb;
    window.Urlblb = null;
    return u1;
}
window.ShowRecAudio = async () => {
    var audio = document.getElementById('audio');
    audio.src = window.Urlblb;
}