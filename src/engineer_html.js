function engHtml(data) {
    return `<div class="card col-3 m-5 shadow-sm p-3 mb-5 rounded" style="width: 18rem; background-color: #f4d8cd;">
    <div class="card-body">
        <h5 class="card-title" style="color: #3A2E39;">${data.name}</h5>
        <h6 class="card-subtitle mb-2" style="color: #f15152">Engineer ⚙️</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" style="color: #3A2E39;">Employee ID: <span>${data.id}</span></li>
            <li class="list-group-item" style="color: #3A2E39;">Employee Email: <a href="mailto: ${data.email}" class="card-link"><${data.email}/a></li>
            <li class="list-group-item" style="color: #3A2E39;">Github: <a href="#" class="card-link">${data.github}</a></li>
        </ul>
    </div>
</div>`

}

module.exports = engHtml;

            