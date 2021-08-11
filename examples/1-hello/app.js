
const result = document.querySelector('.result')

const fetchdata = async () => {
    try {
        const { data } = await axios.get('/.netlify/functions/hello')
        console.log(data);
        result.textContent = data[0].id
    } catch (error) {

    }
}

fetchdata()