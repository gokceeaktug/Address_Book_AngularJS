
app.service('contactsService', function () {
    this.getContacts = function () {
        return contacts;
    };

    this.resetContact = function () {
        return {
            isim: '',
            soyisim: '',
            number:''
        };
    }

    this.addContact = function (contact) {
        var check=document.querySelector(".check");
        var number=document.querySelector(".number");
        var text=document.querySelector(".submit");
        let regex=/^[\d,\s,\+,\-]{5,20}/;
        check.addEventListener("click",()=>
        {
            if(number.value=="")
            {
                text.innerText="numara giriniz";
                text.style.color="#fff";
            }
            else if(number.value.match(regex))
            {
                text.innerText="başarılı numara";
                text.style.color="rgba(4,125,9,1)";
            }
            else
            {
                text.innerText="yanlıs numara";
                text.style.color="#da3400";
            }
        });
        

        
        var nextId = contacts.length + 1;

        contact.id = nextId;

        contacts.push(contact);
    };

  

    this.getContact = function (id, getObj) {
        for (var i = 0, l = contacts.length; i < l; i += 1) {
            if (contacts[i].id === id) {
                return getObj ? contacts[i] : i;

                break;
            }
        }
    };

    var contacts = [
        {
            id: 0,
            isim: 'gökçe',
            soyisim: 'aktuğ',
            number:234567
        },
        {
            id: 1,
            isim: 'minyay',
            soyisim: 'a.ş',
            number:12345
        }
    ];

});
