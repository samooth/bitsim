const Bitsim = require('../')

;(async()=>{

  const bitsim = new Bitsim({ rpc: 'http://root:bitcoin@127.0.0.1:18332' })
  bitsim.init().then(async r => { console.log(r)

    let info = await bitsim.rpc("getinfo")
	console.log(info)

    let lastH =  await bitsim.last()
	console.log(lastH)

  })


})()
