var config = require('./dbconfig')
const sql = require('mssql')
var inputVal = document.getElementById('name');
var uname = document.getElementById('user');
var pass = document.getElementById('myInput');
var email = document.getElementById('email');
var btn = document.getElementById('btn');

btn.addEventListener("click", function(){

    async function getOrders() {
        try{
            const columns = ['UserName','Password','FullName','EmailId','Id'];
            var user = uname;
            var paaas = pass;
            var fname = inputVal;
            var em = email;
            var count = 1;
            let pool = await connect(config);
            let Users = await pool.request()
                                    .input('p2', VarChar(50), user)
                                    .input('p3', VarChar(50), paaas)
                                    .input('p4', VarChar(50), fname)
                                    .input('p5', VarChar(50), em)
                                    .input('p6', Int, count)
                                    .query('insert into [Users].[dbo].[users] (UserName,Password,FullName,EmailId,Id) values (@p2, @p3, @p4, @p5, @p6)');
            return Users.recordset;
        }
        catch(error){
            console.log(error);
        }
    }
    
    module.exports = {
        getOrders : getOrders
    }

})
