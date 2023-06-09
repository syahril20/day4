function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if(name == "") {
        return alert("Nama Tidak Boleh Kosong")
    } else if(email == "") {
        return alert("Email Tidak Boleh Kosong")
    } else if(phone == "") {
        return alert("No Tidak Boleh Kosong")
    } else if(subject == "") {
        return alert("Subject Tidak Boleh Kosong")
    } else if(message == ""){
        return alert("Pesan Tidak Boleh Kosong")
    }

    const destination = "rodyulo20@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${destination}?subject=${subject}&body=Hallo nama saya ${name} , saya ingin ${message}, bisakah anda menghubungi saya di ${phone}` 
    a.click()

    let data = {
        name,
        email,
        phone,
        subject,
        message,
    }
    
    console.log(data)
}

// INPUT BLOG

let blogs = []

function getBlog(event){
    event.preventDefault()

    let title = document.getElementById("title").value
    let start = document.getElementById("start").value
    let end = document.getElementById("end").value
    let description = document.getElementById("description").value
    let image = document.getElementById("img").files
    let node = document.getElementById("nodeBox").checked
    let next = document.getElementById("nextBox").checked
    let react = document.getElementById("reactBox").checked
    let typescript = document.getElementById("typeBox").checked
    

    image = URL.createObjectURL(image[0]);

    if(title == "") {
        return alert("title Tidak Boleh Kosong")
    } else if(start == "") {
        return alert("Start Tidak Boleh Kosong")
    } else if(end == "") {
        return alert("End Tidak Boleh Kosong")
    } else if(description == "") {
        return alert("description Tidak Boleh Kosong")
    }
    

    let blog = {
        title,
        start,
        end,
        description,
        image,
        node,
        next,
        react,
        typescript,
    }
    

    blogs.push(blog)    
    console.log(blogs)
    renderBlog()
}


function renderBlog() {
    document.getElementById("content").innerHTML = ""
    for(let i = 0; i < blogs.length; i++) {
        document.getElementById("content").innerHTML += `
        <div class="item">
        
            <div class="header">
                <img src="${blogs[i].image}" alt="img" class="image">
                <a href="./projectDetail.html" for="name" class="nameProj">${blogs[i].title}</a>
                <br>
                <label for="duration" class="duration">durasi : 3bulan</label>
            </div>
            <div class="itemContent">
                <label for="descriptionclass="description">${blogs[i].description} </label>
            </div>
                <div>
                ${blogs[i].node ?  '<img src="./assets/node.png" alt="logo" class="logo">' : ''}
                ${blogs[i].next ?  '<img src="./assets/next.png" alt="logo" class="logo">' : ''}
                ${blogs[i].react ?  '<img src="./assets/react.png" alt="logo" class="logo">' : ''}
                ${blogs[i].typescript ?  '<img src="./assets/typescript.png" alt="logo" class="logo">' : ''}
                </div>
            <div class="contentButton">
                <a href="#" class="tombol">edit</a>
                <a href="#" class="tombol">delete</a>
            </div>
        </div>`
    }
}

