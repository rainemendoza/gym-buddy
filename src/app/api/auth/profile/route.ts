import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';

// Import your auth options - adjust the path as needed depending on your exact file structure

export async function GET() {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        email: true,
        phone: true,
        instagram: true,
        twitter: true,
        linkedIn: true,
        days: true,
        types: true,
        gender: true,
        experience: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const data = await request.json();

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        phone: data.phone,
        instagram: data.instagram,
        twitter: data.twitter,
        linkedIn: data.linkedin, // Note the capital 'I' in schema
        days: data.preferredDays,
        types: data.preferredWorkouts,
        gender: data.gender,
        experience: data.experience,
      },
      select: {
        id: true,
        email: true,
        phone: true,
        instagram: true,
        twitter: true,
        linkedIn: true,
        days: true,
        types: true,
        gender: true,
        experience: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
