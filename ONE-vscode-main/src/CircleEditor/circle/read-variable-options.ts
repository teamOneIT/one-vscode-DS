// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class ReadVariableOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ReadVariableOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsReadVariableOptions(bb:flatbuffers.ByteBuffer, obj?:ReadVariableOptions):ReadVariableOptions {
  return (obj || new ReadVariableOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsReadVariableOptions(bb:flatbuffers.ByteBuffer, obj?:ReadVariableOptions):ReadVariableOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ReadVariableOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startReadVariableOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endReadVariableOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createReadVariableOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  ReadVariableOptions.startReadVariableOptions(builder);
  return ReadVariableOptions.endReadVariableOptions(builder);
}

unpack(): ReadVariableOptionsT {
  return new ReadVariableOptionsT();
}


unpackTo(_o: ReadVariableOptionsT): void {}
}

export class ReadVariableOptionsT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return ReadVariableOptions.createReadVariableOptions(builder);
}
}