// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class HashtableFindOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):HashtableFindOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsHashtableFindOptions(bb:flatbuffers.ByteBuffer, obj?:HashtableFindOptions):HashtableFindOptions {
  return (obj || new HashtableFindOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsHashtableFindOptions(bb:flatbuffers.ByteBuffer, obj?:HashtableFindOptions):HashtableFindOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new HashtableFindOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startHashtableFindOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endHashtableFindOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createHashtableFindOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  HashtableFindOptions.startHashtableFindOptions(builder);
  return HashtableFindOptions.endHashtableFindOptions(builder);
}

unpack(): HashtableFindOptionsT {
  return new HashtableFindOptionsT();
}


unpackTo(_o: HashtableFindOptionsT): void {}
}

export class HashtableFindOptionsT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return HashtableFindOptions.createHashtableFindOptions(builder);
}
}