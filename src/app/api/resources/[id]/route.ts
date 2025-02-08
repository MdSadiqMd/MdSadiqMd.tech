import { NextRequest, NextResponse } from 'next/server';
import { getGistContent, updateGist } from '../../github';

export const runtime = 'edge';

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string; }; }
) {
    try {
        const gistContent = await getGistContent(process.env.RESOURCES_GIST_ID!);
        const resources = gistContent?.data || [];
        const updatedResources = resources.filter(
            (resource: any) => resource.id !== params.id
        );

        await updateGist(
            process.env.RESOURCES_GIST_ID!,
            updatedResources,
            gistContent?.filename || 'resources.json'
        );
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete resource' }, { status: 500 });
    }
}