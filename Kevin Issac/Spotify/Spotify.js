/*var app = new function () {
    this.cancion = document.getElementById('Canción');
    this.artita = document.getElementById('Artista');

    this.contador = function (data) {
        var contador = document.getElementById('Contador')
        var cancion = 'Canción';
        if (data) {
            if (data > 1) {
                cancion = 'Canciones'
            }
            contador.innerHTML = data + ' ' + canción;
        }else{
            contador.innerHTML = 'Sin' + cancion + 'en lista';
        }
    };

    this.FetchAll = function (){
        var data= '';
        if (this.cancion.length > 0) {
            for (i > 0; i < this.cancion.length; i++) {
                data +='<tr>';
                data +='<td>' + this.cancion[i] + '</td>';
                data +='</tr>'
                
            }
        }

        this.contador(this.cancion.length);
        return this.cancion.innerHTML = data;
    };

    this.añadir=function(){
        canciones = document.getElementById('add-sing');
        var cancion = canciones.value;

        if(cancion){
            this.artista.push(canciones.trim());
            canciones.value='';
            this.FetchAll();
        }
    };
}
app.FetchAll();*/

var app = new function () {
    this.el = document.getElementById('countries');
    this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];
    this.Count = function (data) {
        var el = document.getElementById('counter');
        var name = 'country';
        if (data) {
            if (data > 1) {
                name = 'countries';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    this.FetchAll = function () {
        var data = '';
        if (this.countries.length > 0) {
            for (i = 0; i < this.countries.length; i++) {
                data += '<tr>';
                data += '<td>' + this.countries[i] + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.Count(this.countries.length);
        return this.el.innerHTML = data;
    };
    this.Add = function () {
        el = document.getElementById('add-name');
        // Get the value
        var country = el.value;
        if (country) {
            // Add the new value
            this.countries.push(country.trim());
            // Reset input value
            el.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };
    this.Edit = function (item) {
        var el = document.getElementById('edit-name');
        // Display value in the field
        el.value = this.countries[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function () {
            // Get value
            var country = el.value;
            if (country) {
                // Edit value
                self.countries.splice(item, 1, country.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
        }
    };
    this.Delete = function (item) {
        // Delete the current row
        this.countries.splice(item, 1);
        // Display the new list
        this.FetchAll();
    };

}
app.FetchAll();
function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}