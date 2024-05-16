function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const progressBar = document.getElementById('progressBar');
    const progressStatus = document.getElementById('progressStatus');

    const file = fileInput.files[0];
    if (!file) {
        alert('Por favor seleccione un archivo.');
        return;
    }

    const totalSize = file.size;
    let loadedSize = 0;

    const updateProgress = () => {
        const percentComplete = (loadedSize / totalSize) * 100;
        progressBar.style.width = percentComplete + '%';
        progressStatus.textContent = percentComplete.toFixed(2) + '% completado';
        
    };

    const simulateUpload = () => {
        const chunkSize = 1024; 
        const simulateUploadInterval = 50;


        const uploadInterval = setInterval(() => {
            loadedSize += chunkSize;
            if (loadedSize >= totalSize) {
                loadedSize = totalSize;
                clearInterval(uploadInterval);
            }
            updateProgress();
        }, simulateUploadInterval);
    };

    simulateUpload();
}
