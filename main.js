document.addEventListener('DOMContentLoaded',()=>{
    const imageInput =document.getElementById('imageInput')
    const croppedImage = document.getElementById('croppedImage')
    const cropButton =document.getElementById('cropButton')
    const downloadButton =document.getElementById('downloadButton');





let cropper;

imageInput.addEventListener('change',(e)=>{
    let file = event.target.files[0]
    if(file){
        const reader = new FileReader()

        reader.onload = (e) =>{
            croppedImage.src = e.target.result
            croppedImage.classList.remove('hidden')

            //loading the widget

cropper = new Cropper(croppedImage,{
    aspectRatio:1,
    viewMode:1,
})
    cropButton.style.display = 'inline-block'
        }

        reader.readAsDataURL(file)
    }
    })
    cropButton.addEventListener('click', () => {
        const croppedDataUrl = cropper.getCroppedCanvas().toDataURL(); // Change getCropperCanvas() to getCroppedCanvas()
        croppedImage.src = croppedDataUrl;
        downloadButton.style.display = 'inline-block';
    });

    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = croppedImage.src; // Corrected spelling from cropepdImage to croppedImage
        link.download = 'cropped_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
})