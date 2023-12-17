fetch('https://open-long-puck.glitch.me')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('tableBody')

        data.forEach(car => {
            const row = document.createElement('tr')

            const brandCell = document.createElement('td')
            brandCell.textContent = car.brand

            const modelCell = document.createElement('td')
            modelCell.textContent = car.model

            row.appendChild(brandCell)
            row.appendChild(modelCell)

            tableBody.appendChild(row)
        })
    })
