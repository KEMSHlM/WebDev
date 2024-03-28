import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const prompt = body.prompt;

  try {
    // ここの内容はサーバーサイド側で実行されるため，隠蔽されている．
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: 1,
      size: "512x512",
      quality: "hd",
      response_format: "b64_json", // base64は，[a-z, A-Z], [0-9], [+, /]などで構成される64bitの文字列
    });

    const image = response.data[0].b64_json;
    return NextResponse.json({ photo: image });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
