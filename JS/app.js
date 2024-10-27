if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', event => {
        const x = event.accelerationIncludingGravity.x;
        const y = event.accelerationIncludingGravity.y;

        document.documentElement.style.setProperty('--move-x', `${x * 2}deg`);
        document.documentElement.style.setProperty('--move-y', `${y * -2}deg`);
    });
} else {
    console.log('DeviceMotion is not supported.');
}
