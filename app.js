var app = new Vue({
    el:'#app',
    data: {
        stepIndex:0,
        currentStep:null,
        steps: [
            {
                type:"multi",
                question:"What type of property are you looking to sell?",
                options: [
                    {answerFor:"propertyType", label:"Residential", value:"residential", icon:"residential.svg"},
                    {answerFor:"propertyType", label:"Commercial", value:"commercial", icon:"commercial.svg"}
                ]
            },

            {
                type: "form",
                question: "Where is this property located?",
                fields: [
                    { answerFor: "zip", placeholder: "ZIP Code", required:true, pattern:"[0-9]{5}"}
                ]
            },

            {
                type: "multi",
                question: "How much do you think your property is worth?",
                options: [
                    {answerFor:"expectedValue", label:"Under $100k", value:"$100k<"},
                    {answerFor:"expectedValue", label:"$100k to $200k", value:"$100k-$200k"},
                    {answerFor:"expectedValue", label:"$200k to $300k", value:"$200k-$300k"},
                    {answerFor:"expectedValue", label:"$300k to $400k", value:"$300k-$400k"},
                    {answerFor:"expectedValue", label:"$400k to $500k", value:"$400k-$500k"},
                    {answerFor:"expectedValue", label:"Over $500k", value:">$500k"},
                ]
            },

            {
                type: "multi",
                question: "How soon are you looking to sell?",
                options: [
                    { answerFor: "timeFrame", label: "As Soon As Possible", value: "ASAP" },
                    { answerFor: "timeFrame", label: "1 - 3 Months", value: "1-3" },
                    { answerFor: "timeFrame", label: "3 - 6 Months", value: "3-6" },
                    { answerFor: "timeFrame", label: "6 - 12 Months", value: "6-12" },
                    { answerFor: "timeFrame", label: "12+ Months", value: "12+" },
                    { answerFor: "timeFrame", label: "Not Sure", value: "Not Sure" },
                ]
            },

            {
                type: "multi",
                question: "How many bedrooms does the property have?",
                options: [
                    { answerFor: "bedroomsNumber", label: "1 Bedroom", value: 1 },
                    { answerFor: "bedroomsNumber", label: "2 Bedrooms", value: 2 },
                    { answerFor: "bedroomsNumber", label: "3 Bedrooms", value: 3 },
                    { answerFor: "bedroomsNumber", label: "4 Bedrooms", value: 4 },
                    { answerFor: "bedroomsNumber", label: "5 Bedrooms", value: 5 },
                    { answerFor: "bedroomsNumber", label: "6 Bedrooms", value: 6 },
                ]
            },

            {
                type:"multi",
                question:"How many bathrooms does the property have?",
                options: [
                    {answerFor:"bathroomsNumber", label:"1 Bathroom", value:1},
                    {answerFor:"bathroomsNumber", label:"2 Bathrooms", value:2},
                    {answerFor:"bathroomsNumber", label:"3 Bathrooms", value:3},
                    {answerFor:"bathroomsNumber", label:"4 Bathrooms", value:4},
                    {answerFor:"bathroomsNumber", label:"5 Bathrooms", value:5},
                    {answerFor:"bathroomsNumber", label:"6 Bathrooms", value:6},
                ]
            },

            {
                type:"form",
                question:"Provide the property address:",
                fields:[
                    {answerFor:"street", placeholder:"Street", required:true},
                    {answerFor:"city", placeholder:"City", required:true},
                    {answerFor:"state", placeholder:"State", required:true},
                    {answerFor:"zip", placeholder:"Zip", required:true, pattern:"[0-9]{5}"}
                ]
            },

            {
                type:"form",
                question:"How can we reach you with our fair offer?",
                fields:[
                    { answerFor: "name", placeholder: "Your Name", required: true},                    
                    { answerFor: "email", placeholder: "Email Address", type: "email", required: true},                    
                    { answerFor: "phone", placeholder: "Phone Number", type:"tel", required: true},
                ]
            }
        
        ],
        answers:{
            propertyType: null,
            zip: null,
            expectedValue: null,
            timeFrame: null,
            bedroomsNumber:null,
            bathroomsNumber:null,
            street:null,
            city:null,
            state:null,
            name:null,
            email:null,
            phone:null
        }
    },

    created: function() {
        this.currentStep = this.steps[0]
    },
    methods: {
        selectAnswer: function(answerFor, value) {
            this.answers[answerFor]=value;
            this.nextStep();
        },
        
        checkForm: function(e) {
            e.preventDefault();
            this.nextStep();
        },

        nextStep: function() {
            if (this.stepIndex==this.steps.length-1) {
                console.log(this.answers);
                return false;
            }
            

            this.stepIndex++;
            this.currentStep = this.steps[this.stepIndex];
        }
    }
})