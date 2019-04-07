// CODE here for your Lambda Classes
class Person{
    constructor(stats){
        this.name = stats.name;
        this.age = stats.age;
        this.location = stats.location;
        this.gender = stats.gender;
    }
    speak(){
        return `Hello my name is ${this.name} I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(stats){
    super(stats);
    this.specialty = stats.specialty;
    this.favLanguage = stats.favLanguage;
    this.catchPrase = stats. catchPrase;
    }
demo(subject){
return 'Today we are learning about ${subject}'
    }
    grade(student, subject){
        return '${student.name} receives a perfect score on ${subject}'
    }
}

class Student extends Person{
    constructor(stats){
    super(stats);
    this.previousBackground = stats.previousBackground;
    this.className = stats.className;
    this.favSubjects = stats.favSubjects;
    }     
                                                                                                                                                                                                                                                                                                                
}

