const searchInput = document.getElementById("searchEntry");
const searchButton = document.getElementById("searchButton");
const invalidAlert = document.getElementById("invalidAlert");

function validateSearch()
{
    if(searchInput.value.trim() === "")
    {
        invalidAlert.style.top = "13.75vh";
        setTimeout(function(){
            invalidAlert.style.top = "11.75vh";
        }, 5000);
        return false;
    }
    return true;
}

function executeSearch(searchTerm)
{
    alert("searching functionality still being implemented :)");
}

searchButton.addEventListener("click", function()
{
    validateSearch();
    if(validateSearch() === true)
        executeSearch(searchInput.value);
});