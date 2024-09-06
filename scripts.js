document.addEventListener('DOMContentLoaded', () => {
    const redInputRange = document.getElementById('red');
    const greenInputRange = document.getElementById('green');
    const blueInputRange = document.getElementById('blue');

    const redInputNumber = document.getElementById('red-input');
    const greenInputNumber = document.getElementById('green-input');
    const blueInputNumber = document.getElementById('blue-input');

    const colorBox = document.getElementById('color-box');
    const hexValue = document.getElementById('hex-value');

    const colorPicker = document.getElementById('color-picker');

    function updateColor() {
        const red = parseInt(redInputRange.value);
        const green = parseInt(greenInputRange.value);
        const blue = parseInt(blueInputRange.value);

        colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        const hex = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
        hexValue.textContent = `Código Hexadecimal: ${hex.toUpperCase()}`;
        
        redInputNumber.value = red;
        greenInputNumber.value = green;
        blueInputNumber.value = blue;
        
        colorPicker.value = hex;
    }

    function syncRangeAndInput() {
        redInputRange.addEventListener('input', () => {
            redInputNumber.value = redInputRange.value;
            updateColor();
        });
        greenInputRange.addEventListener('input', () => {
            greenInputNumber.value = greenInputRange.value;
            updateColor();
        });
        blueInputRange.addEventListener('input', () => {
            blueInputNumber.value = blueInputRange.value;
            updateColor();
        });

        redInputNumber.addEventListener('input', () => {
            const value = Math.max(0, Math.min(255, redInputNumber.value));
            redInputRange.value = value;
            redInputNumber.value = value;
            updateColor();
        });
        greenInputNumber.addEventListener('input', () => {
            const value = Math.max(0, Math.min(255, greenInputNumber.value));
            greenInputRange.value = value;
            greenInputNumber.value = value;
            updateColor();
        });
        blueInputNumber.addEventListener('input', () => {
            const value = Math.max(0, Math.min(255, blueInputNumber.value));
            blueInputRange.value = value;
            blueInputNumber.value = value;
            updateColor();
        });
    }

    function syncColorPicker() {
        colorPicker.addEventListener('input', () => {
            const color = colorPicker.value;
            const rgb = hexToRgb(color);

            if (rgb) {
                redInputRange.value = rgb.r;
                greenInputRange.value = rgb.g;
                blueInputRange.value = rgb.b;

                redInputNumber.value = rgb.r;
                greenInputNumber.value = rgb.g;
                blueInputNumber.value = rgb.b;

                updateColor();
            }
        });
    }

    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;

        if (hex.length === 7) {
            r = parseInt(hex.slice(1, 3), 16);
            g = parseInt(hex.slice(3, 5), 16);
            b = parseInt(hex.slice(5, 7), 16);
        }

        return { r, g, b };
    }

    syncRangeAndInput();
    syncColorPicker();
});
