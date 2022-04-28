const intHtml = 

`<div class="card col-3 m-5 shadow-sm p-3 mb-5 rounded" style="width: 18rem; background-color: #f4d8cd;">
    <div class="card-body">
        <h5 class="card-title" style="color: #3A2E39;">${data.name}</h5>
        <h6 class="card-subtitle mb-2" style="color: #f15152">Intern ✏️</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" style="color: #3A2E39;">Employee ID: <span>${data.id}</span></li>
            <li class="list-group-item" style="color: #3A2E39;">Employee Email: <a href="mailto: ${data.email}" class="card-link">${data.email}</a></li>
            <li class="list-group-item" style="color: #3A2E39;">School: <span>${data.school}</span></li>
        </ul>
    </div>
</div>`