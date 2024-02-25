import supabase from "@/supabase";

export async function fetchLeetcodePOTD({problem}) {
    try {
        
        let { data: dsaproblem, error } = await supabase
            .from('leetcode-potd')
            .select('*')
            .like("slug_url",problem)
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            return { dsaproblem };
        }

        return { dsaproblem, error };
    } catch (error) {
        console.error('An error occurred:', error);
        return { error };
    }
}
