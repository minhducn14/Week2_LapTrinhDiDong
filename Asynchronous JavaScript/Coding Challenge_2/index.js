// Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super- descriptive this time, so that you can figure out some stuff by
// yourself.Pretend you're working on your own �
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image(use
// document.createElement('img')) and sets the.src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise.The fulfilled value should be the
// image element itself.In case there is an error loading the image(listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// PART 2
// 4. Consume the promise using.then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image(set display CSS
// property to 'none'), and load a second image(Hint: Use the image element
// returned by the 'createImage' promise to hide the current image.You will
// need a global variable for that �)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast

function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', () => {
            document.querySelector('.images').appendChild(img);
            console.log(`Image loaded: ${imgPath} + time: ${new Date().toLocaleTimeString()}`);
            setTimeout(() => resolve(img), 10000);
        });

        img.addEventListener('error', () => {
            reject(new Error('Failed to load image'));
        });
    });
}


let currentImage;

createImage('img/img-1.jpg')
    .then(img => {
        currentImage = img;
        currentImage.style.display = 'block';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImage.style.display = 'none';
        currentImage = img;
        currentImage.style.display = 'block';
        return createImage('img/img-3.jpg');
    })
    .then(img => {
        currentImage.style.display = 'none';
        currentImage = img;
        currentImage.style.display = 'block';
    })
    .catch(err => {
        console.error(err.message);
    });
