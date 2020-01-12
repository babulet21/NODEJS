const EventEmitter = require('events');

class Logger extends EventEmitter
    {
        log(message)
        {
            console.log(message);

            //sending Http request
            this.emit('messageLogged',{id:'05496/08',Name:'Yonas Babulet'})
        }
    }

module.exports=Logger;