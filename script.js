const app = new Vue({
    el: "#app",

    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novit???',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'sent'
                    }
                ],
            }
        ],

        contactAvatar: '_1',
        avatarName: 'Michele',
        contactMessagesNumber: 0,
        newMessageText: "",
        searchName: "",
        searchSentinell: [],
        contactDeletOption: [],
        controllore: true,
        today: new Date(),
        optionNotVisible: true
    },

    methods: {
        contactSelector(index) {
            this.contactAvatar = this.contacts[index].avatar;
            this.avatarName = this.contacts[index].name;
        },

        viewMessages(index) {
            this.contactMessagesNumber = index;
        },

        closeOptions(){
            for (let i = 0; i < this.contactDeletOption.length; i++) {
                this.contactDeletOption[i] = true;
            }

            this.controllore = false;
            this.optionNotVisible = true;
            console.log("avvenuto")
        },

        addNewMessage(newText, stat) {
            if (newText != "" && stat != "") {
                const newMessage = {
                    date: `${this.today.getDate()}/${this.today.getMonth()}/${this.today.getFullYear()} ${this.today.getHours()}:${this.today.getMinutes()}:${this.today.getSeconds()}`,
                    message: newText,
                    status: stat,
                }
                this.contacts[this.contactMessagesNumber].messages.push(newMessage);
                this.newMessageText = "";
                const val = true;
                this.contactDeletOption.push(val);
            }
        },

        replyToTheMessage(newText, stat) {
            setTimeout(this.addNewMessage, 3000, newText, stat);
        },

        searchContact(index) {
            for (let i = 0; i < this.searchName.length; i++) {
                if (this.searchName[i] == this.contacts[index].name[i]) {
                    this.searchSentinell[index] = true;
                } else {
                    this.searchSentinell[index] = false;
                    return this.searchSentinell[index];
                }
            }

            return true;
        },

        deleteContactOption(index) {
            this.contactDeletOption = [];
            for (let i = 0; i < this.contacts[this.contactMessagesNumber].messages.length; i++) {
                const val = true;
                this.contactDeletOption.push(val);
            }

            if (this.contactDeletOption[index] == true && this.controllore == true) {
                this.contactDeletOption[index] = false;
                this.optionNotVisible = false;
                this.controllore = false;
            } else {
                this.contactDeletOption[index] = true;
                this.controllore = true;
                this.optionNotVisible = true;
            }
        },

        hoursLastMessage(contact) {
            if (contact.messages.length != 0) {
                const onlyHour = contact.messages[contact.messages.length - 1].date.split(' ');
                onlyHour[onlyHour.length - 1] = onlyHour[onlyHour.length - 1].split(':');
                onlyHour[onlyHour.length - 1] = `${onlyHour[onlyHour.length - 1][0]}:${onlyHour[onlyHour.length - 1][1]}`
                return onlyHour[onlyHour.length - 1];
            }else{
                return " ";
            }
        },


        timeOfTheMessage(contact, index) {
            const onlyHour = contact.date.split(' ');
            onlyHour[onlyHour.length - 1] = onlyHour[onlyHour.length - 1].split(':');
            onlyHour[onlyHour.length - 1] = `${onlyHour[onlyHour.length - 1][0]}:${onlyHour[onlyHour.length - 1][1]}`
            return onlyHour[onlyHour.length - 1];
        },

        deleteMessage(contact, index) {
            console.log(index)
            this.contacts[this.contactMessagesNumber].messages.splice(index, 1);
            this.contactDeletOption.splice(index, 1);
            console.log(this.contactDeletOption)
        },

        lastMessage(contact){
            if(contact.messages.length == 0){
                return " "
            }else{
                return contact.messages[contact.messages.length - 1].message;
            }
        }
    },

    created() {
        for (let i = 0; i < this.contacts.length; i++) {
            const j = true;
            this.searchSentinell.push(j);
        }

        for (let i = 0; i < this.contacts[0].messages.length; i++) {
            const val = true;
            this.contactDeletOption.push(val);
        }
    }
});