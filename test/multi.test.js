const m=require("../src/multi")

it("Should return correct multi",()=>{
const result =m(2,2)
expect(result).toBe(4)
})
