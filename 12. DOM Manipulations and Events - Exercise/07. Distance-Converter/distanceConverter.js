function attachEventsListeners() {
    let button = document.getElementById('convert');
    
    button.addEventListener('click', convert);

    function convert(e) {
        let input = document.getElementById('inputDistance').value;
        let inputUnits = document.getElementById('inputUnits');
        let selectedUnit = inputUnits.value;

        let meters = 0;

        switch (selectedUnit) {
            case "km": meters = input * 1000; break;
            case "m": meters = input; break;
            case "cm": meters = input / 100; break;
            case "mm": meters = input / 1000; break;
            case "mi": meters = input * 1609.34; break;
            case "yrd": meters = input * 0.9144; break;
            case "ft": meters = input * 0.3048; break;
            case "in": meters = input * 0.0254; break;
        }

        let outputElement = document.getElementById('outputDistance');
        outputElement.removeAttribute('disabled');
        let outputUnits = document.getElementById('outputUnits').value;
        let result = 0;
        
        switch (outputUnits) {
            case "km": result = meters / 1000; break;
            case "m": result = meters; break;
            case "cm": result = meters * 100; break;
            case "mm": result = meters * 1000; break;
            case "mi": result = meters / 1609.34; break;
            case "yrd": result = meters / 0.9144; break;
            case "ft": result = meters / 0.3048; break;
            case "in": result = meters / 0.0254; break;
        }

        outputElement.value = result;
    }
}