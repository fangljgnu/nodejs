const ffi = require("ffi");
const User32 =  ffi.Library('user32', {
                'GetWindowLongPtrW': ['int', ['int', 'int']],
                'SetWindowLongPtrW': ['int', ['int', 'int', 'long']],
                'GetSystemMenu': ['int', ['int', 'bool']],
                'DestroyWindow': ['bool', ['int']]
            })
console.log(User32.DestroyWindow(1000));//返回false1