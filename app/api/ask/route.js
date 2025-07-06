import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { message, image } = await request.json();
    let prompt = message;

    // If image is provided, enhance the prompt
    if (image) {
      prompt = `Analyze this image and respond to: ${message}`;
    }
    
    const response = await fetch(`${process.env.OLLAMA_BASEURL}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemma3:latest",
        prompt: prompt,
        stream: false,
        images: image ? [image.split(",")[1]] : undefined, // Remove data:image/jpeg;base64, prefix
      }),
    });


    if (response.status != 200) {
      console.log(`Ollama API error: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      response: data.response,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to get response from Ollama",
        details: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
