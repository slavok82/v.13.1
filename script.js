function Student(name, faculty, marks) {
    this.name = name;     
    this.faculty = faculty;    
    this.marks = marks;
    this.getAvgMarks = getAverage;
    this.getMedianMark = getMedian;
    this.getMaxMark = getMax;
    this.getMinMark = getMin;
    this.getTotal = getTotal;
    this.getInfo = getInfo;   
}
//--//
    function getAverage () {
        return this.marks.reduce((a, b) => a + b, 0)/ this.marks.length;
    }

    function getMedian () {
        const sorted = [...this.marks].sort((a, b) => a - b);
        const medium = Math.floor(sorted.length / 2);    
        if (sorted.length % 2 === 0) {
            return (sorted[medium - 1] + sorted[medium]) / 2;
        }    
        return sorted[medium];
    }

    function getMax () {
        return Math.max(...this.marks);
    }
    
    function getMin () {
        return Math.min(...this.marks);
    }

    function getTotal() {
        return this.marks.reduce((acc, el) => {
            return acc += el; 
        });
    }
    
    function getInfo () {
        return `${this.name} ${this.faculty} ${this.getTotal()}`;
    };
//--//
const student = new Student('Taras', 'IT', [1,2,3,4,6,6,5]);
console.log('Average grade:' + ' ' + student.getAvgMarks());
console.log('Median grade:' + ' ' + student.getMedianMark());
console.log('Maximum score:' + ' ' + student.getMaxMark());
console.log('Minimum score:' + ' ' + student.getMinMark());
console.log('Total score:' + ' ' + student.getTotal());
console.log('Student information:' + ' ' + student.getInfo());

