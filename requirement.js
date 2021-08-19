/*

requirements

1)book

-ISBN -book's unique id   -string
-title                    -string
-author                   -[number] (authors id)
-language                 -string 
-publications             -number
-no of pages              -number
-categories               -[string]

2)author
-id                       -number 
-name                     -string
-books                    -[string]

3)publications

-id                       -number 
-name                     -string
-books                    -[string]

-------API s--------
-GET
    -to get all books ✔
    -to get specific books
    -to get specific books based on catagory
    -to get specific books based on author

-POST
    -to update book details


-PUT
    -to update book details
    -to update/add new authors

-DELETE
    
    *mangoDB alllows to delete only one book at a time due to security purpose*
    
    -delete a book
    -delete a author from a book

    
Authors

-GET
    -to get all authors
    -to get specific authoe
    -to get list of  authors based on books

-POST

    -add new author
    

-PUT
    -to update book details
    -to add/update new author

-DELETE

    -delete a book
    -delete a author from a book


publications

-GET
    -to get all publications
    -to get specific publications
    -to get list of  publications based on books

-POST
    -add new publications


-PUT
    -to update publications
    -to add/update new publications


-DELETE
    -delete a book from publications
    -delete a publications
*/