// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class LessEqualOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):LessEqualOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsLessEqualOptions(bb:flatbuffers.ByteBuffer, obj?:LessEqualOptions):LessEqualOptions {
  return (obj || new LessEqualOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsLessEqualOptions(bb:flatbuffers.ByteBuffer, obj?:LessEqualOptions):LessEqualOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new LessEqualOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startLessEqualOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endLessEqualOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createLessEqualOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  LessEqualOptions.startLessEqualOptions(builder);
  return LessEqualOptions.endLessEqualOptions(builder);
}

unpack(): LessEqualOptionsT {
  return new LessEqualOptionsT();
}


unpackTo(_o: LessEqualOptionsT): void {}
}

export class LessEqualOptionsT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return LessEqualOptions.createLessEqualOptions(builder);
}
}
