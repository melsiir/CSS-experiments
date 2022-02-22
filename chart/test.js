import fs from 'fs/promises'

async function tempData() {
    const file = await fs.readFile('./data/ZonAnn.Ts+dSST.csv', 'utf-8')
  console.log(file)
}

tempData()
