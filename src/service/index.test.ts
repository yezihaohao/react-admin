import * as index from "./index"
// @ponicode
describe("index.getBbcNews", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.getBbcNews()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.weibo", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.weibo()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.gitOauthLogin", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.gitOauthLogin()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.gitOauthToken", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.gitOauthToken("function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.gitOauthToken("function substr(start, length) {\n        return string_substr.call(\n            this,\n            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,\n            length\n        );\n    }")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.gitOauthToken("function log(code) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        console.log(utils.tr.apply(null, arguments));\n    }\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.gitOauthToken("function readToken_lt_gt(code) {\n\t      // '<>'\n\t      var next = this.input.charCodeAt(this.state.pos + 1);\n\t      var size = 1;\n\t\n\t      if (next === code) {\n\t        size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;\n\t        if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(_types.types.assign, size + 1);\n\t        return this.finishOp(_types.types.bitShift, size);\n\t      }\n\t\n\t      if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {\n\t        if (this.inModule) this.unexpected();\n\t        // `<!--`, an XML-style comment that should be interpreted as a line comment\n\t        this.skipLineComment(4);\n\t        this.skipSpace();\n\t        return this.nextToken();\n\t      }\n\t\n\t      if (next === 61) {\n\t        // <= | >=\n\t        size = 2;\n\t      }\n\t\n\t      return this.finishOp(_types.types.relational, size);\n\t    }")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.gitOauthToken("function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.gitOauthToken("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.gitOauthInfo", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.gitOauthInfo("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.gitOauthInfo("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.gitOauthInfo("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.gitOauthInfo("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.gitOauthInfo("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.gitOauthInfo("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.admin", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.admin()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.guest", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.guest()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.fetchMenu", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.fetchMenu()
        }
    
        expect(callFunction).not.toThrow()
    })
})
