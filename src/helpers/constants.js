export default (variable = 'BASIC_API', path, port = 44304) => {

    switch (variable){
        //BASIC_API provide server address.
        case 'BASIC_API': return "https://localhost:" + port //
        //WITH_METHOD provide server address plus path.
        case 'WITH_METHOD': return "https://localhost:44304/" + path
    }
}