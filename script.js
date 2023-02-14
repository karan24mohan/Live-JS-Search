const search = document.getElementById('search')
const userList = document.querySelector('.user-list')
const ArrData = []

const getUserData = () => {
    let API = 'https://api.github.com/users'
    fetch(API)
        .then((res) => res.json())
        .then((data) => {

            if (data) {
                userList.innerHTML = ''
            }

            data.map((element) => {
                const li = document.createElement('li');

                ArrData.push(li)
                console.log(ArrData)

                li.insertAdjacentHTML('afterbegin', `
                <div class="user-data">
                    <img src=${element.avatar_url} alt=${element.avatar_url}>
                    <div>
                        <p>${element.login}</p>
                        <a href=${element.html_url}>${element.html_url}</a>
                    </div>
                </div>
            `)
                userList.appendChild(li)
            })
        })
        .catch((err) => console.log(err))
}

search.addEventListener('input', (e) => {
    console.log(e.target.value)
    const val = e.target.value

    ArrData.map((curElem) => {
        curElem.innerText.toLowerCase().includes(val.toLowerCase()) ? curElem.classList.remove('hide') :
            curElem.classList.add('hide')
    })
})

getUserData();