function skillsMember() {
    return {
        name: "skillsMember",
        description: "Get the skills of a member",
        parameters: {
        type: "object",
        properties: {
            memberId: {
            type: "string",
            description: "The ID of the member whose skills you want to retrieve.",
            },
        },
        required: ["memberId"],
        },
    };
}