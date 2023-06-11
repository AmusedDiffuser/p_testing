module.exports = {
  run: [{
    "method": "set",
    "params": {
      "local": {
        "counter": 0
      }
    }
  }, {
    "uri": "https://github.com/malfunctionize/llama.git/index.js",
    "method": "run",
    "params": {
      "message": {
        "p": "### Instruction:\n\nPlease rephrase the following as a loving personal message to Kathrine using warm and friendly wording, tell her that I thought it was a beautiful show and that she moved with grace and purpose.\n\n### Response\n\n",
        "m": "../models/stable-vicuna/13b_q4_0.bin",
        "n": 256
      }
    },
    "queue": true,
    "returns": "local.message"
  }, {
    "method": "set",
    "params": {
      "self": {
        "db.json": {
          "items": "{{self.db && self.db.items ? self.db.items.concat(local.message) : [local.message] }}"
        }
      }
    }
  }, {
    "method": "set",
    "params": {
      "local": {
        "counter": "{{local.counter+1}}"
      }
    }
  }, {
    "method": "goto",
    "params": {
      "index": "{{ local.counter > 2 ? null : 1 }}"
    }
  }]
}
