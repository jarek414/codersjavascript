class Tree {
    constructor(type) {
        this.type = type;
}
    bloom(){
        console.log(`i'm blooming ${this.type}`);
    }

}

const bananaTree = new Tree('palm');
bananaTree.bloom();
const oak = new Tree('leafyTree');
oak.bloom();
const fir = new Tree('conifer');
fir.bloom();
