const formElement = document.querySelector('form');

const redirectPage = function(){
    location.href = './blog.html';
}

const storeBlogDataLocalStorage = function(data){
    const blog = readLocalStorage();

    blogs.push(data);

    const stringData = JSON.stringify(blogs);
    localStorage.setItem("blogs",stringData);

}

const handleFormSubmit = function (event){
    event.preventDefault();
    const usernameElement = document.querySelector('#Username').value.trim();
    const titleElement = document.querySelector('#title').value.trim();
    const contentElement = document.querySelector('#content').value.trim();

    if(!usernameElement || !titleElement || !contentElement){
        const errorElement = document.querySelector('#error');
        errorElement.textContent = 'fill in all fields';

        setTimeout(()=>{
            errorElement.textContent = '';
        }, 3000);

        return;
    }

    const formData = {
        username: usernameElement,
        title: titleElement,
        content: contentElement
    }

    console.log(formData);

    storeBlogDataLocalStorage(formData);
    redirectPage();
}



formElement.addEventListener('submit', handleFormSubmit)