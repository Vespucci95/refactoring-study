const someCustomers = [
  {
    name: 'roy',
    address: { state: 'MA' },
  },
  {
    name: 'jay',
    address: { state: 'CT' },
  },
  {
    name: 'kay',
    address: { state: 'ME' },
  },
  {
    name: 'kai',
    address: { state: 'NONE' },
  },
  {
    name: 'roi',
    address: { state: 'VT' },
  },
  {
    name: 'rai',
    address: { state: 'NH' },
  },
  {
    name: 'rey',
    address: { state: 'RI' },
  },
]

const innewNewEngland = stateCode => {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

const newEnglanders = someCustomers.filter(c => innewNewEngland(c.address.state))

console.log(newEnglanders)
