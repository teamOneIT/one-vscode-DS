// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ActivationFunctionType } from '../circle/activation-function-type';


export class UnidirectionalSequenceLSTMOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UnidirectionalSequenceLSTMOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUnidirectionalSequenceLSTMOptions(bb:flatbuffers.ByteBuffer, obj?:UnidirectionalSequenceLSTMOptions):UnidirectionalSequenceLSTMOptions {
  return (obj || new UnidirectionalSequenceLSTMOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUnidirectionalSequenceLSTMOptions(bb:flatbuffers.ByteBuffer, obj?:UnidirectionalSequenceLSTMOptions):UnidirectionalSequenceLSTMOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UnidirectionalSequenceLSTMOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

fusedActivationFunction():ActivationFunctionType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : ActivationFunctionType.NONE;
}

cellClip():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

projClip():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

timeMajor():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

asymmetricQuantizeInputs():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startUnidirectionalSequenceLSTMOptions(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addFusedActivationFunction(builder:flatbuffers.Builder, fusedActivationFunction:ActivationFunctionType) {
  builder.addFieldInt8(0, fusedActivationFunction, ActivationFunctionType.NONE);
}

static addCellClip(builder:flatbuffers.Builder, cellClip:number) {
  builder.addFieldFloat32(1, cellClip, 0.0);
}

static addProjClip(builder:flatbuffers.Builder, projClip:number) {
  builder.addFieldFloat32(2, projClip, 0.0);
}

static addTimeMajor(builder:flatbuffers.Builder, timeMajor:boolean) {
  builder.addFieldInt8(3, +timeMajor, +false);
}

static addAsymmetricQuantizeInputs(builder:flatbuffers.Builder, asymmetricQuantizeInputs:boolean) {
  builder.addFieldInt8(4, +asymmetricQuantizeInputs, +false);
}

static endUnidirectionalSequenceLSTMOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUnidirectionalSequenceLSTMOptions(builder:flatbuffers.Builder, fusedActivationFunction:ActivationFunctionType, cellClip:number, projClip:number, timeMajor:boolean, asymmetricQuantizeInputs:boolean):flatbuffers.Offset {
  UnidirectionalSequenceLSTMOptions.startUnidirectionalSequenceLSTMOptions(builder);
  UnidirectionalSequenceLSTMOptions.addFusedActivationFunction(builder, fusedActivationFunction);
  UnidirectionalSequenceLSTMOptions.addCellClip(builder, cellClip);
  UnidirectionalSequenceLSTMOptions.addProjClip(builder, projClip);
  UnidirectionalSequenceLSTMOptions.addTimeMajor(builder, timeMajor);
  UnidirectionalSequenceLSTMOptions.addAsymmetricQuantizeInputs(builder, asymmetricQuantizeInputs);
  return UnidirectionalSequenceLSTMOptions.endUnidirectionalSequenceLSTMOptions(builder);
}

unpack(): UnidirectionalSequenceLSTMOptionsT {
  return new UnidirectionalSequenceLSTMOptionsT(
    this.fusedActivationFunction(),
    this.cellClip(),
    this.projClip(),
    this.timeMajor(),
    this.asymmetricQuantizeInputs()
  );
}


unpackTo(_o: UnidirectionalSequenceLSTMOptionsT): void {
  _o.fusedActivationFunction = this.fusedActivationFunction();
  _o.cellClip = this.cellClip();
  _o.projClip = this.projClip();
  _o.timeMajor = this.timeMajor();
  _o.asymmetricQuantizeInputs = this.asymmetricQuantizeInputs();
}
}

export class UnidirectionalSequenceLSTMOptionsT {
constructor(
  public fusedActivationFunction: ActivationFunctionType = ActivationFunctionType.NONE,
  public cellClip: number = 0.0,
  public projClip: number = 0.0,
  public timeMajor: boolean = false,
  public asymmetricQuantizeInputs: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return UnidirectionalSequenceLSTMOptions.createUnidirectionalSequenceLSTMOptions(builder,
    this.fusedActivationFunction,
    this.cellClip,
    this.projClip,
    this.timeMajor,
    this.asymmetricQuantizeInputs
  );
}
}